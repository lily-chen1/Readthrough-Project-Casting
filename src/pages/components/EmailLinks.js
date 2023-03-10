import React from "react";
import Button from "@mui/material/Button";
import theme from "../themes/Theme";
import { ThemeProvider } from "@mui/material/styles";

function linkBuilder(agentEmails, emailSubject, emailBody, bcc) {
  if (bcc == "true") {
    const link =
      "mailto:?bcc=" +
      agentEmails +
      "&subject=" +
      emailSubject +
      "&body=" +
      emailBody;
    return link;
  } else {
    const link =
      "mailto:" +
      agentEmails +
      "?subject=" +
      emailSubject +
      "&body=" +
      emailBody;
    return link;
  }
}

function agentEmailStringBuilder(listAgents) {
  const agentEmails = listAgents
    ? listAgents.map((c) => c.emailAddress).join(",")
    : [""];
  return agentEmails;
}

const EmailLinks = ({ agents, subject, body, bcc }) => {
  if (!agents) {
    // dumb check to see if agents is null
    return <div></div>;
  } else {
    if (bcc == "true") {
      // only need 1 link for all agents
      return (
        <div>
          {/* <a
            href={linkBuilder(
              agentEmailStringBuilder(agents),
              subject,
              body,
              bcc
            )}
          >
            Send email to all!
          </a> */}
          <ThemeProvider theme={theme}>
            <Button
              size="small"
              href={linkBuilder(
                agentEmailStringBuilder(agents),
                subject,
                body,
                bcc
              )}
              variant="link"
            >
              Send email to all!
            </Button>
          </ThemeProvider>
        </div>
      );
    }
    // otherwise, split into separate links for each agent
    return (
      <div>
        {agents.map((agent) => (
          <span>
            {/* <a href={linkBuilder(agent.emailAddress, subject, body, "false")}>
              Send to {agent.agentName}
            </a>{" "} */}
            <ThemeProvider theme={theme}>
              <Button
                size="small"
                href={linkBuilder(agent.emailAddress, subject, body, "false")}
                variant="link"
              >
                Send to {agent.agentName}
              </Button>{" "}
            </ThemeProvider>
          </span>
        ))}
      </div>
    );
  }
};

export default EmailLinks;
