// components/Header.tsx
'use client'; // Required for styled-components in Next.js 13+

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  text-decoration: none;
  
  &:hover {
    color: #2563eb;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#3b82f6' : '#6b7280'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    background: #f3f4f6;
  }
`;

const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo href="/">Portfolio</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $isActive={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
