import React from 'react';
import styled from 'styled-components';

interface IconChipProps {
  label: string;
  color?: string;
  size?: string;
}

const IconChip: React.FC<IconChipProps> = ({ label, color, size }) => {
  return (
    <ChipContainer color={color} size={size}>
      <Icon>asd</Icon>
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
