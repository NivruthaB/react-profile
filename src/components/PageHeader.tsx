import React from "react";
import styled from "styled-components";
interface IPageHeaderProps {
  title: any,
  description: string;
}
const PageHeader = ({ title, description }: IPageHeaderProps) => (
  <PageHeaderContainer>
    <StyledPageDescription>{description}</StyledPageDescription>
    <h3 className="pageTitle">{title}</h3>
  </PageHeaderContainer>
);

export default PageHeader;

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledPageDescription = styled.div`
  display:flex;
  justify-content: center;
  color: var(--secondary-text-color);
  font-size: 16px;
  margin-bottom: 10px;
`