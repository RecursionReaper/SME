import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import BoltIcon from '@mui/icons-material/Bolt';

interface PowerWidgetProps {
    voltage: number;
    current: number;
}

const PowerDisplay = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(4),
    background: 'linear-gradient(45deg, #ff00ff 30%, #ff33ff 90%)',
    borderRadius: '10px',
    color: '#fff',
    marginBottom: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
        zIndex: 1,
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.1,
    zIndex: 0,
    '& svg': {
        width: '200px',
        height: '200px',
    },
}));

const PowerWidget: React.FC<PowerWidgetProps> = ({ voltage, current }) => {
    const power = voltage * current; // Power in watts

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <BoltIcon sx={{ color: '#ff00ff' }} />
                Power Consumption
            </Typography>
            <PowerDisplay>
                <IconWrapper>
                    <BoltIcon />
                </IconWrapper>
                <Typography variant="h2" component="div" sx={{ position: 'relative', zIndex: 2 }}>
                    {power.toFixed(1)}W
                </Typography>
                <Typography variant="subtitle1" sx={{ position: 'relative', zIndex: 2 }}>
                    {voltage.toFixed(1)}V × {current.toFixed(1)}A
                </Typography>
            </PowerDisplay>
        </Box>
    );
};

export default PowerWidget; 