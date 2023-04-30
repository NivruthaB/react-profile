import { motion } from "framer-motion";
import React, { useState } from "react";
import PageHeader from "src/components/PageHeader";
import styled from "styled-components";
const experienceDetails = {
    aspenTechInmation: {
        detailsPoints: ['Work with a small team of web developers to build a modular and flexible web application framework that can be designed by the users according to their requirements.',
            'Work with front-end technologies and languages such as React, TypeScript, MobX, Cypress, Git etc.',
            'Continuous testing of the features developed. '
        ],
        link: 'https://www.aspentech.com/en/products/dataworks/aspentech-inmation',
        title: 'Web developer',
        startDate: 'Oct, 2021',
        endDate: 'Present',
        companyName: 'AspenTech Inmation'
    },
    infosys: {
        detailsPoints: ['Write modern and robust code for a diverse set of clients and internal projects using latest versions of Angular, React.JS, .NET framework and MySQL.',
            'Work in an agile friendly environment where communication and collaboration with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders were done on a daily basis.',
            'Underwent training in Python, PHP, Linux OS as a system engineer trainee for four months.'],
        link: 'https://www.infosys.com/',
        title: 'Software developer',
        startDate: 'Jun, 2018',
        endDate: 'Sep, 2021',
        companyName: 'Infosys Limited'
    },
}
const Experience = () => {
    const checkWindowSize = (width) => {
        if (width <= 992) {
            return true;
        }
        return false;
    }
    let width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    let isWidthSmall = checkWindowSize(width);
    const [isSmall, setIsSmall] = useState(isWidthSmall);
    window.onresize = () => {
        width = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth;
        const isWidthSmall = checkWindowSize(width);
        setIsSmall(isWidthSmall);
    }
    const [selectedCompany, setSelectedCompany] = useState('aspenTechInmation');
    const openLink = () => {
        window.open(experienceDetails[selectedCompany].link);
    }

    return (
        <section className="about">
            <PageHeader title="Experience" description="Where I have worked" />
            <StyledContent>
                <ButtonContainer animate={isSmall !== true ? { x: 45 } : { x: '0%' }}
                    transition={{ ease: "easeInOut", duration: 0.6 }}>
                    <CompanyButton active={selectedCompany === 'aspenTechInmation'} infosys={selectedCompany === 'infosys'} onClick={() => setSelectedCompany('aspenTechInmation')}>AspenTech Inmation</CompanyButton>
                    <CompanyButton active={selectedCompany === 'infosys'} infosys={selectedCompany === 'infosys'} onClick={() => setSelectedCompany('infosys')}>Infosys</CompanyButton>
                </ButtonContainer>
                <CompanyExperience initial={{ x: 80 }} animate={isSmall !== true ? { x: 40 } : { x: '0%' }}
                    transition={{ ease: "easeInOut", duration: 0.6 }}>
                    <RoleTitle>{experienceDetails[selectedCompany].title} at &nbsp;
                        <CompanyName
                            whileHover={{ opacity: 1 }}
                            onClick={openLink}
                            transition={{ duration: 0.5 }}
                        >{experienceDetails[selectedCompany].companyName}
                        </CompanyName>
                    </RoleTitle>
                    <TimeSpan>{experienceDetails[selectedCompany].startDate} - {experienceDetails[selectedCompany].endDate}</TimeSpan>
                    <StyledList>
                        {experienceDetails[selectedCompany].detailsPoints.map((point) => {
                            return (
                                <div key={point} style={{ padding: '10px' }}>{point}</div>
                            )
                        })}
                    </StyledList>
                </CompanyExperience>
            </StyledContent>
        </section>
    );
};


export default Experience;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 40px;
    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const CompanyButton = styled.button<any>`
    white-space: nowrap;
    color: ${(props) => props.active ? 'var(--hl-color)' : 'var(--text-color)'};
    background-color: ${(props) => props.active ? '#112240' : 'transparent'};
    border: none;
    display: flex;
    justify-content: flex-start;
    padding: 10px 10px;
    font-size: 18px;
    border-radius: 1px;
    cursor: pointer;
    align-items: center;
    opacity: ${(props) => props.active ? 0.8 : 0.7};
    height: 80px;
    font-family: 'Inter', sans-serif;
    &:before {
        content: "";
        position: relative;
        left: -12px;
        width:2px;
        height: ${(props) => props.active ? '80px' : '0'};
        background-color: var(--hl-color);
        margin-right: 10px;
        transition: height 0.3s ease-in-out;
        @media (max-width: 992px) {
            height: 2px;
            width: ${(props) => props.active ? '160px' : '0'};
            transition: width 0.3s ease-in-out;
            position: absolute;
            top: -2px;
            left: ${(props) => props.infosys ? '160px' : '0'};;
        }
    }
    @media (max-width: 992px) {
        width: 160px;
        height: 50px;
        white-space: normal;
    }
    &:hover{
        opacity: 0.9;
        color: var(--hl-color);
    }
`

const ButtonContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    border-left: solid 2px var(--secondary-text-color);
    margin-top: 30px;
    height: 160px;
    @media (max-width: 992px) {
        flex-direction: row;
        border-top: solid 2px var(--secondary-text-color);
        border-left: none;
        width: 320px;
        height: 100px;
    }
`

const CompanyExperience = styled(motion.div)`
    display: flex;
    flex-direction: column;
    color: var(--secondary-text-color);
    margin-left: 80px;
    width: 600px;
    font-size: 18px;
    @media (max-width: 992px) {
        width: 90vw;
        margin-left: 0;
    }
`
const StyledList = styled.ul`
    margin-left: 30px;
`

const RoleTitle = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left: 40px;
    color: var(--text-color);
    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const TimeSpan = styled.div`
    display: flex;
    margin-bottom: 20px;
    margin-left: 40px;
    color: var(--text-color);
    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const CompanyName = styled(motion.div)`
    display: flex;
    flex-direction:column;
    color: var(--hl-color);
    opacity: 0.8;
    margin-top: -2px;
    cursor: pointer;
    &:before {
        content: "";
        position: relative;
        bottom: -20px;
        left: 0;
        width:0;
        height: 1.5px;
        background-color: var(--hl-color);
        transition: width 0.3s ease-in-out;
    }
    &:hover:before {
        width: 100%;
    }
`