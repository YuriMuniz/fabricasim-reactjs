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
    //const reportId = process.env.REACT_APP_REPORT_ID;
    const reportId = "63645674-bee8-4398-9772-c6d637781e56";
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const workspaceId = process.env.REACT_APP_WORKSPACE_ID;
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    const token = process.env.REACT_APP_TOKEN;
    const token_report = "H4sIAAAAAAAEACWTta7FBgBD_-WtqRSmSh3CcMOcbGG8Ya76731qd3vwsf33j5U-w5QWP3_--Izl07e4gslhHu5rq--QqlmhdnG1Lo6VoE20qkyEJt4uOo4DUfq7orFGBdOC9ioq08rN1o7Oi6xRD7zkb2cVOrbstjXXnXarIiSnA3wnN9qE94SsM97FwUftFDCrLlcxdQuzEOrs0b7EbnvLpTBDXGlDTw6zsZKhTnnptF9ggddxRXIkgnBtl3bYMoivsZMnB334Kz8Qbtl2PXbaiG9JTVmw5HmEnOBmArTwYecE7hX7JmmcSB2hTnEe4robIerjL_e5eUKxAdCYAYUCzipFu17Ypr49JlfvZe3A2HhjgQAWYqdfACdwEmVtvoTxUPbAtGTQICDjH8hmHiIeT_U5hUN3Z0BwRGG2WrwxqD0ZsBRgbCyTUm8hW3sZQU3Gj01DUZRXrnOAhD2YNgYJMsHCmHIwJdREIYm9knyOlcDCJL2GMtAVZqWSCp7NVEUViDSg_poXDnZgtJa6zA8T1g9Fp-dY432hWfXvIB7PlwFFM8k01EVkc5KH4bbF8QOuUt5ZPhDFaMzMHOt2GdM5d6q9LE9I6oi-XWUReOexuCo_xUciGx9AEn8abQihpfzbBJ1jAeZ6xeJrrB1oo0SaTE0u26Mo7CzERcZVcXYX4IPIS4mUuwPEFSe87JqsVC3vYn59nub84VDZMytJDCwieYNvLImTZDAR-c7t7hZG_Ky5Xaud8NfPHz_c-sz79Cmf3-nmnTk7U_SNgZVwpwqdU5EEE2YeZqEVaffUJ3EJO9tpDGX8WJNO-CVfSAnmTvaQcZL124rxhU626YBMpiB5Vo9nqC4kFx_YKhCRwaj1ONE-wSSco2nNg_gy-pZ0OuKh8AnysrrwTayCclXu96lvXCvTGcNh_bDj2r5xSYi19ZAx-TNweB5SChUdkNcc-_nxHgyYcLP6IgkIsBNGDPManiXkbWppsjrkJQSeXPoHnUi9oeqIVVxX8lxT7NW3dEosG6YioBbL2izY-HDZkT950iPHtaiBVNK95tBHmsytd1zbHh8hyOiY6qWQFbY1c2nnE7HwZ19u_Euyux2owyuuUY2Culf_9R_mZ25-YwW_lL2rHVOsq2MFR3JtKwT5wzf_q35PPqb7sZa_soTHPOrW1Rhy7ZzYPDglRnLLXoIwsH6teuTb5541ahYZXZEZCCW9byimIQ_rmGvkDFQs_JrxCi6bk-LE0ZK9ItMWh6bJ1RYasZnmoIOVt9ZUv5O4cWQOTWC91rS5EuWkN1JhH0wFkW-_FRs7Xbbdjy9NqaxacUQ4c0qATmX3ioXuBQFWl6y3a36Z004ogUDzHoBMy2DfYRksVPcOPvclXon0BUwxYxXHJFcAsuG0YObcICLmh2YRlqproudD2_ytqZTS2Pjo0k449os4gKHYUCbq2A3bBtpafgW43DYrjLLAp51UDcfKjbxC-YowJgxiRezQfKqDyyzI0YQ61cI-sdD2L-Z__gUIBJ1trgUAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ==";
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
            accessToken: token_report,
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