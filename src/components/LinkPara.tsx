import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Link } from "@mui/material";

export default function LinkPara({ children, href, target }: any) {
  // const theme = useTheme();

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'underline', fontWeight:'bold',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.secondary,
      textDecoration: 'none',
    },
  }));

  return(
    <StyledLink href={href} target={target || '_blank'}>
      {children}
    </StyledLink>
  )
}

