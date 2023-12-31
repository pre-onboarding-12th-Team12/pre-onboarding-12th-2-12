import styled from 'styled-components';
import React from 'react';

interface ImageProps {
  shape?: 'circle' | 'rectangle';
  src?: string;
  size?: number;
}

const Image: React.FC<ImageProps> = props => {
  const { shape, src, size } = props;
  const styles = {
    src: src,
    size: size,
  };
  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'circle',
  src: '',
  size: 36,
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div<{ src?: string }>`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${props => props.src}');
  background-size: cover;
`;

const ImageCircle = styled.div<{ src?: string; size?: number }>`
  --size: ${(props: ImageProps) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${props => props.src}');
  background-size: cover;
  margin: 4px;
`;

export default Image;
