import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

interface IconChipProps {
  label: number | undefined;
  color?: string;
  size?: string;
  icon?: JSX.Element;
}

const IconChip: React.FC<IconChipProps> = ({ label, color, size, icon }) => {
  return (
    <ChipContainer color={color} size={size}>
      {icon && <Icon>{icon}</Icon>}
      {label}
    </ChipContainer>
  );
};

const ChipContainer = styled.div<{ color?: string; size?: string }>`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.color || '#e0e0e0'};
  color: #fff;
  border-radius: 10px;
  padding: 4px 8px;
  font-size: ${props => props.size || '14px'};
`;

const Icon = styled.span`
  margin-right: 4px;
`;

export default IconChip;
