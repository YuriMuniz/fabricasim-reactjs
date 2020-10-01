import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { UserAgentApplication, AuthError, AuthResponse } from "msal";
import { service, factories, models, IEmbedConfiguration } from "powerbi-client";
import { useTranslation } from "react-i18next";
import api from "../../services/api";
import { Container } from './styles';

function PowerBi() {
    const { t } = useTranslation();
    const [accessToken, setAccessToken] = useState("");
    const [embedUrl, setEmbedUrl] = useState("");
    const [error, setError] = useState([]);
    let reportRef = React.createRef();
    const powerbi = new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);
  
    const reportId = "63645674-bee8-4398-9772-c6d637781e56";
   
    let reportContainer;
   

    useEffect(() => {
        
        load();
       
    }, [])

   

   async function load() {
        reportContainer = reportRef["current"];
        const embed = await api.get("get-embed");
        
        console.log(embed);
        const embedConfiguration = {
            type: "report",
            tokenType: models.TokenType.Embed,
            accessToken: embed.data.accessToken,
            embedUrl: embed.data.embedUrl,
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


    return (
        <Container
            id="reportContainer"
            ref={reportRef} >
            {t('Loading the report')}
        </Container>
    );
}

export default PowerBi;