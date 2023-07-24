/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
    Card,
    Text,
    Bold,
    Title,
    Italic,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Divider,
} from "@tremor/react";

export const Cards = ({ title, score, url, selftext_html }) => {

    return (
        <Card className="w-10/12 mx-auto mb-5">
            <Title className="mb-2">
                <Bold>Title: </Bold>
                {title}
            </Title>
            <Text className="mb-2">
                <Bold>Score: </Bold>
                {score}
            </Text>
            <Divider />
            <Text className="mb-2 whitespace-normal truncate">
                <Bold>Url: </Bold>
                <Italic className="text-blue-500 hover:text-red-500 ">
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        {url}
                    </a>
                </Italic>
            </Text>
            <Accordion className="max-w-md mx-auto">
                <AccordionHeader>
                    <Bold>SelfText_Html: </Bold>
                </AccordionHeader>
                <AccordionBody>
                    <Text className="mb-2 whitespace-normal truncate">
                        {selftext_html}
                    </Text>
                </AccordionBody>
            </Accordion>
        </Card>
    );
};
