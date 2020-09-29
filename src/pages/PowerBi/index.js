import React, { useEffect, useState } from 'react';

import { UserAgentApplication, AuthError, AuthResponse } from "msal";
import { service, factories, models, IEmbedConfiguration } from "powerbi-client";
import { useTranslation } from "react-i18next";

import { Container } from './styles';

function PowerBi() {
    const { t } = useTranslation();
    const [accessToken, setAccessToken] = useState("");
    const [embedUrl, setEmbedUrl] = useState("");
    const [error, setError] = useState([]);
    let reportRef = React.createRef();
    const powerbi = new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);
    const reportId = "63645674-bee8-4398-9772-c6d637781e56";
    const clientId = "194a7b18-64f4-450d-b385-6b1ce9a86d7b";
    const workspaceId = "776eb9ba-b830-457f-b0f9-e289df2086b0";
    const scope = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

    let reportContainer;
    //let reportRef = null;
    //let loading: JSX.Element;

    useEffect(() => {
        console.log(accessToken);
        console.log(embedUrl);
        if (error.length) {

            // Cleaning the report container contents and rendering the error message in multiple lines
            reportContainer.textContent = "";
            error.forEach(line => {
                reportContainer.appendChild(document.createTextNode(line));
                reportContainer.appendChild(document.createElement("br"));
            });
        }

        
        
        else if (accessToken !== "" && embedUrl !== "") {

            const embedConfiguration = {
                type: "report",
                tokenType: models.TokenType.Aad,
                accessToken,
                embedUrl,
                id: reportId,

            };

            console.log(reportContainer);
            const report = powerbi.embed(reportContainer, embedConfiguration);

            // Clear any other loaded handler events
            report.off("loaded");

            // Triggers when a content schema is successfully loaded
            report.on("loaded", function () {
                console.log("Report load successful");
            });

            // Clear any other rendered handler events
            report.off("rendered");

            // Triggers when a content is successfully embedded in UI
            report.on("rendered", function () {
                console.log("Report render successful");
            });

            // Clear any other error handler event
            report.off("error");

            // Below patch of code is for handling errors that occur during embedding
            report.on("error", function (event) {
                const errorMsg = event.detail;

                // Use errorMsg variable to log error in any destination of choice
                console.error(errorMsg);
            });
        }

        if (reportRef !== null) {
            reportContainer = reportRef["current"];
        }

        // User input - null check
        if (workspaceId === "" || reportId === "") {
            setError(["Please assign values to workspace Id and report Id in Config.ts file"]);
        } else {

            // Authenticate the user and generate the access token
            authenticate();

        }

    }, [accessToken])

    // Authenticating to get the access token
    function authenticate(){
        const thisObj = this;

        const msalConfig = {
            auth: {
                clientId: clientId
            }
        };

        const loginRequest = {
            scopes: scope
        };

        const msalInstance = new UserAgentApplication(msalConfig);

        function successCallback(response){

            if (response.tokenType === "id_token") {
                authenticate();

            } else if (response.tokenType === "access_token") {
                //console.log(response.accessToken);
                setAccessToken(response.accessToken);
                //accessToken = response.accessToken;
                //thisObj.setUsername(response.account.name);
                getembedUrl();

            } else {

                setError([("Token type is: " + response.tokenType)]);
            }
        }

        function failCallBack(error){

            setError(["Redirect error: " + error]);
        }

        msalInstance.handleRedirectCallback(successCallback, failCallBack);

        // check if there is a cached user
        if (msalInstance.getAccount()) {

            // get access token silently from cached id-token
            msalInstance.acquireTokenSilent(loginRequest)
                .then((response) => {
                   // console.log(response.accessToken);
                    // get access token from response: response.accessToken
                    setAccessToken(response.accessToken);
                    //this.setUsername(response.account.name);
                    //setEmbedUrl(body["embedUrl"]);
                    getembedUrl(response.accessToken);
                })
                .catch((err) => {

                    // refresh access token silently from cached id-token
                    // makes the call to handleredirectcallback
                    if (err.name === "InteractionRequiredAuthError") {
                        msalInstance.acquireTokenRedirect(loginRequest);
                    }
                    else {
                        setError([err.toString()])
                    }
                });
        } else {

            // user is not logged in or cached, you will need to log them in to acquire a token
            msalInstance.loginRedirect(loginRequest);
        }
    }

     // Power BI REST API call to get the embed URL of the report
     function getembedUrl(token){
       //(token);

        fetch("https://api.powerbi.com/v1.0/myorg/groups/" + workspaceId + "/reports/" + reportId, {
            headers: {
                "Authorization": "Bearer " + token
            },
            method: "GET"
        })
            .then(function (response) {
                const errorMessage= [];
                errorMessage.push("Error occurred while fetching the embed URL of the report")
                errorMessage.push("Request Id: " + response.headers.get("requestId"));

                response.json()
                    .then(function (body) {
                        // Successful response
                        if (response.ok) {
                            console.log(body);
                            setEmbedUrl(body["embedUrl"]);
                            setAccessToken(token);
                            load(body["embedUrl"]);                        
                        }
                        // If error message is available
                        else {
                            errorMessage.push("Error " + response.status + ": " + body.error.code);

                            setError(errorMessage );
                        }

                    })
                    .catch(function () {
                        errorMessage.push("Error " + response.status + ":  An error has occurred");

                       setError(errorMessage );
                    });
            })
            .catch(function (error) {

                // Error in making the API call
                setError(error);
            })
    }

    function load(url){
        
        if (accessToken !== "" && url!==null) {

            const embedConfiguration = {
                type: "report",
                tokenType: models.TokenType.Aad,
                accessToken,
                embedUrl: url,
                id: reportId,

            };

            console.log("chegou");
            const report = powerbi.embed(reportContainer, embedConfiguration);

            // Clear any other loaded handler events
            report.off("loaded");

            // Triggers when a content schema is successfully loaded
            report.on("loaded", function () {
                console.log("Report load successful");
            });

            // Clear any other rendered handler events
            report.off("rendered");

            // Triggers when a content is successfully embedded in UI
            report.on("rendered", function () {
                console.log("Report render successful");
            });

            // Clear any other error handler event
            report.off("error");

            // Below patch of code is for handling errors that occur during embedding
            report.on("error", function (event) {
                const errorMsg = event.detail;

                // Use errorMsg variable to log error in any destination of choice
                console.error(errorMsg);
            });
        }
    }


    return (
        <Container
            id="reportContainer"
            ref={reportRef} >
            {t('Loading the report')}
        </Container>
    );
}

export default PowerBi;