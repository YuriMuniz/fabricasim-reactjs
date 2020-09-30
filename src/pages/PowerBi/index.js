import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
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
    const reportId = process.env.REACT_APP_REPORT_ID;
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const workspaceId = process.env.REACT_APP_WORKSPACE_ID;
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    const token = process.env.REACT_APP_TOKEN;
    const scope = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

    let reportContainer;
    //let reportRef = null;
    //let loading: JSX.Element;

    useEffect(() => {
        loadReport();

        //console.log(process.env.REACT_APP_TOKEN);
        //getembedUrl(process.env.REACT_APP_TOKEN);

    }, [])

    function loadReport() {

        if (reportRef !== null) {
            reportContainer = reportRef["current"];
        }


        const reportEmbedUrl = `https://app.powerbi.com/reportEmbed?reportId=${reportId}`;
        const permissions = models.Permissions.All;
        const config = {
            type: 'report',
            tokenType: models.TokenType.Embed,
            accessToken: process.env.REACT_APP_TOKEN_REPORT,
            embedUrl: reportEmbedUrl,
            permissions,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true,
            },
        };

        const report = powerbi.embed(reportContainer, config);

        // const request =
        // {
        //     "datasets": [
        //         {
        //             "id": "12bfcbcf-40c6-4def-a6dc-0c268f991089"
        //         }
        //     ],
        //     "reports": [
        //         {

        //             "id": "63645674-bee8-4398-9772-c6d637781e56"
        //         }
        //     ]
        // }

        // fetch({
        //     url: "https://api.powerbi.com/v1.0/myorg/GenerateToken",
        //     data: request,
        //     headers: {
        //         "Authorization": "Bearer " + process.env.REACT_APP_TOKEN
        //     },
        //     method: "POST",


        // }).then(async function (response) {
        //     console.log(response);
        //     response.json()
        //         .then(function (body) {

        //             console.log(reportId);


        //         })
        //         .catch(function (err) {
        //             console.log(err);
        //         });
        // }).catch(function (err) {
        //     console.log(err);
        // })


    }

    // Authenticating to get the access token
    // async function authenticate() {
    //     //var url = "https://login.windows.net/common/oauth2/token";
    //     const url = "https://login.microsoftonline.com/common/oauth2/token";
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         }
    //     }

    //     const headers = {
    //         "Content-Type": "application/x-www-form-urlencoded",

    //     }

    //     const formData = new URLSearchParams();
    //     formData.append("grant_type", "password");
    //     formData.append("client_id", clientId);
    //     formData.append("username", username);
    //     formData.append("password", password);
    //     formData.append("resource","https://analysis.windows.net/powerbi/api");
    //     // var formBody = new FormData();
    //     // formBody.set("grant_type", "password");
    //     // formBody.set("client_id", clientId);
    //     // formBody.set("username", username);
    //     // formBody.set("password", password);
    //     // formBody.set("resource","https://analysis.windows.net/powerbi/api");

    //     // var formData = {
    //     //     "grant_type": "password",
    //     //     "client_id": clientId,
    //     //     "resource": "https://analysis.windows.net/powerbi/api",

    //     //     "username": username,
    //     //     "password": password
    //     // };
    //     // axios.post(url, qs.stringify(formData), config)
    //     //     .then((result) => {
    //     //         console.log(result);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //     })

    //     // axios.post({
    //     //     method: 'post',
    //     //     url: url,
    //     //     data: formData,
    //     //     headers: {'Content-Type': 'application/x-www-form-urlencoded' }
    //     //     })
    //     //     .then(function (response) {
    //     //         //handle success
    //     //         console.log(response);
    //     //     })
    //     //     .catch(function (response) {
    //     //         //handle error
    //     //         console.log(response);
    //     //     });

    //    await fetch({
    //         url: url,
    //         form: formData,
    //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //         method: "POST",


    //     }).then(async function (response) {
    //         console.log(response);
    //         console.log(response.headers.get("content-type"));
    //         //console.log(JSON.stringify(response.body.json()));
    //         console.log(await response.text());
    //         await response.json()
    //             .then(function (body) {
    //                 console.log(body);
    //                 // Successful response
    //                 if (response.ok) {
    //                     console.log(body);

    //                 }
    //                 // If error message is available
    //                 else {
    //                     console.log(body)
    //                 }

    //             })
    //             .catch(function (err) {
    //                 console.log(err);
    //             });
    //     }).catch(function (err) {
    //         console.log(err);
    //     })

    //     // const thisObj = this;
    //     // console.log(username);
    //     // console.log(password);

    //     // const msalConfig = {
    //     //     auth: {

    //     //         clientId: clientId,
    //     //         pbiUsername:  username,
    //     //         pbiPassword: password
    //     //     }
    //     // };

    //     // const loginRequest = {
    //     //     scopes: scope
    //     // };

    //     // const msalInstance = new UserAgentApplication(msalConfig);

    //     // function successCallback(response){

    //     //     if (response.tokenType === "id_token") {
    //     //         authenticate();

    //     //     } else if (response.tokenType === "access_token") {
    //     //         //console.log(response.accessToken);
    //     //         setAccessToken(response.accessToken);
    //     //         //accessToken = response.accessToken;
    //     //         //thisObj.setUsername(response.account.name);
    //     //         getembedUrl();

    //     //     } else {

    //     //         setError([("Token type is: " + response.tokenType)]);
    //     //     }
    //     // }

    //     // function failCallBack(error){

    //     //     setError(["Redirect error: " + error]);
    //     // }

    //     // msalInstance.handleRedirectCallback(successCallback, failCallBack);

    //     // // check if there is a cached user
    //     // //if (msalInstance.getAccount()) {

    //     //     // get access token silently from cached id-token
    //     //     msalInstance.acquireTokenSilent(loginRequest)
    //     //         .then((response) => {
    //     //            console.log(response);
    //     //             // get access token from response: response.accessToken
    //     //             setAccessToken(response.accessToken);
    //     //             //this.setUsername(response.account.name);
    //     //             //setEmbedUrl(body["embedUrl"]);
    //     //             getembedUrl(response.accessToken);
    //     //         })
    //     //         .catch((err) => {
    //     //             console.log(err)
    //     //             // refresh access token silently from cached id-token
    //     //             // makes the call to handleredirectcallback
    //     //             if (err.name === "InteractionRequiredAuthError") {
    //     //                 msalInstance.acquireTokenRedirect(loginRequest);
    //     //             }
    //     //             else {
    //     //                 setError([err.toString()])
    //     //             }
    //     //         });
    //     // } else {

    //     // user is not logged in or cached, you will need to log them in to acquire a token
    //     //   msalInstance.loginRedirect(loginRequest);
    //     // }
    // }

    // Power BI REST API call to get the embed URL of the report
    async function getembedUrl(token) {
        //(token);

        await fetch("https://api.powerbi.com/v1.0/myorg/groups/" + workspaceId + "/reports/" + reportId, {
            headers: {
                "Authorization": "Bearer " + token
            },
            method: "GET"
        })
            .then(function (response) {
                const errorMessage = [];
                errorMessage.push("Error occurred while fetching the embed URL of the report")
                errorMessage.push("Request Id: " + response.headers.get("requestId"));
                console.log(response);
                response.json()
                    .then(function (body) {
                        // Successful response
                        if (response.ok) {
                            console.log(body);
                            setEmbedUrl(body["embedUrl"]);
                            setAccessToken(token);
                            load(body["embedUrl"], token);
                        }
                        // If error message is available
                        else {
                            errorMessage.push("Error " + response.status + ": " + body.error.code);

                            setError(errorMessage);
                        }

                    })
                    .catch(function () {
                        errorMessage.push("Error " + response.status + ":  An error has occurred");

                        setError(errorMessage);
                    });
            })
            .catch(function (error) {

                // Error in making the API call
                setError(error);
            })
    }

    function load(url, token) {
        console.log(url);
        if (url !== null) {

            const embedConfiguration = {
                type: "report",
                tokenType: models.TokenType.Aad,
                accessToken: token,
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