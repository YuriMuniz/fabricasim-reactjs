import React, { useEffect, useState } from 'react';

import axios from 'axios';
import qs from 'querystring';
import { UserAgentApplication, AuthError, AuthResponse } from "msal";
import { service, factories, models, IEmbedConfiguration } from "powerbi-client";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import api from "../../services/api";
import { Container } from './styles';

function PowerBi() {
  const { t } = useTranslation();
  const [accessToken, setAccessToken] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [error, setError] = useState([]);
  const [label, setLabel] = useState(t('Loading the report'))
  let reportRef = React.createRef();
  const powerbi = new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);

  const profile = useSelector((state) => state.user.profile);
  console.log(profile);
  const reportId = "cc4136b5-5d78-4cbe-a251-967d7337ba5d";

  let reportContainer;


  useEffect(() => {
    async function fetchData() {
      const sup = profile.roles.some((r) => ["ADMIN+"].includes(r));
      const adminMore = profile.roles.some((r) => ["ADMIN+"].includes(r));
      const admin = profile.roles.some((r) => ["ADMIN"].includes(r));
      const teacher = profile.roles.some((r) => ["TEACHER"].includes(r));
      const student = profile.roles.some((r) => ["STUDENT"].includes(r));
      if (adminMore || sup) {
        const filter = {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "Groups",
            column: "GroupDescription"
          },

          values: [""]
        };
        load(filter);
        return;
      }
      if (admin && teacher) {
        let groupIds = [];
        const groups = await api.get(
          `groups-by-owner/?id=${profile.id}`,
          {}
        );
        console.log(groups.data);
        for (const group of groups.data) {
          groupIds.push(group.id)
        }

        const userGroups = await api.get(
          `user-group-by-user/?id=${profile.id}`,
          {}
        );
        console.log(userGroups.data);
        for (const userGroup of userGroups.data) {
          groupIds.push(userGroup.group_Id);
        }

        if (groupIds.length === 0) {
          setLabel("Usuário não criou nenhum grupo e não pertence a nenhum.")
        } else {
          const filter = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
              table: "Groups",
              column: "Id"
            },
            operator: "In",
            values: groupIds
          };

          load(filter);
          return;
        }


      }
      if (admin) {
        let groupIds = [];
        const groups = await api.get(
          `groups-by-owner/?id=${profile.id}`,
          {}
        );
        console.log(groups.data);
        for (const group of groups.data) {
          groupIds.push(group.id)
        }

        if (groupIds.length === 0) {
          setLabel("Usuário não criou nenhum grupo.");
        } else {
          const filter = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
              table: "Groups",
              column: "Id"
            },
            operator: "In",
            values: groupIds
          };
          load(filter);
          return;
        }

      }

      if (teacher) {
        let groupIds = [];
        const userGroups = await api.get(
          `user-group-by-user/?id=${profile.id}`,
          {}
        );
        console.log(userGroups.data);
        for (const userGroup of userGroups.data) {
          groupIds.push(userGroup.group_Id);
        }
        if (groupIds.length === 0) {
          setLabel("Usuário não pertence a nenhum grupo.");
        } else {
          const filter = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
              table: "Groups",
              column: "Id"
            },
            operator: "In",
            values: groupIds
          };
          load(filter);
          return;
        }

      }
      if (student) {
        const filter = {
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "UserProfiles",
            column: "Id"
          },
          operator: "In",
          values: [profile.id]
        };
        load(filter);
        return;

      }


    }
    fetchData()



  }, [])



  async function load(filter) {
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


    const report = powerbi.embed(reportContainer, embedConfiguration);
    //console.log(report.getPages());



    report.on("loaded", function () {
      report.setFilters([filter]).catch(function (errors) {
        console.log(errors);
      });
    });


    report.off("rendered");


    report.on("rendered", function () {

    });


    report.off("error");


    report.on("error", function (event) {
      const errorMsg = event.detail;


      console.error(errorMsg);
    });

  }


  return (
    <Container
      id="reportContainer"
      ref={reportRef} >
      {t(label)}
    </Container>
  );
}

export default PowerBi;