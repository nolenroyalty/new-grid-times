import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  const leftGroup = ({ mobile }) => {
    const Group = mobile ? MobileActionGroup : DesktopActionGroup;
    return (
      <Group>
        <button>
          <Search size={24} />
        </button>
        <button>
          <Menu size={24} />
        </button>
      </Group>
    );
  };
  return (
    <header>
      <SuperHeader>
        <Row>
          {leftGroup({ mobile: true })}
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        {leftGroup({ mobile: false })}
        <Logo />
        <DesktopSubscribeSection>
          <Button>Subscribe</Button>
          <LogInButton>Already a subscriber?</LogInButton>
        </DesktopSubscribeSection>
      </MainHeader>
    </header>
  );
};

const LogInButton = styled.button`
  font-size: ${14 / 16}rem;
  font-family: var(--font-family-serif);
  font-weight: var(--font-weight-normal);
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);

  border: none;
  background: none;
  padding: none;
  position: absolute;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: 4px;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const DesktopSubscribeSection = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const MobileActionGroup = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 8px;
    margin-bottom: 72px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
  }
`;

export default Header;
