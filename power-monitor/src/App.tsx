import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import PowerWidget from './components/PowerWidget';

// Create a dark theme with custom colors
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff9f',
    },
    secondary: {
      main: '#ff00ff',
    },
    background: {
      default: '#0a1929',
      paper: '#001e3c',
    },
  },
});

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: 'rgba(0, 30, 60, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}));

const VoltageDisplay = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  background: 'linear-gradient(45deg, #00ff9f 30%, #00ffcc 90%)',
  borderRadius: '10px',
  color: '#000',
  marginBottom: theme.spacing(3),
}));

interface DataPoint {
  time: string;
  voltage: number;
  current: number;
}

// Mock data for demonstration
const generateMockData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const now = new Date();
  for (let i = 0; i < 20; i++) {
    data.push({
      time: new Date(now.getTime() - (20 - i) * 60000).toLocaleTimeString(),
      voltage: Math.random() * 10 + 220,
      current: Math.random() * 5 + 10,
    });
  }
  return data;
};

function App() {
  const [data, setData] = useState<DataPoint[]>(generateMockData());
  const [currentVoltage, setCurrentVoltage] = useState<number>(230);
  const [currentAmperage, setCurrentAmperage] = useState<number>(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), {
          time: new Date().toLocaleTimeString(),
          voltage: Math.random() * 10 + 220,
          current: Math.random() * 5 + 10,
        }];
        setCurrentVoltage(newData[newData.length - 1].voltage);
        setCurrentAmperage(newData[newData.length - 1].current);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(45deg, #00ff9f 30%, #00ffcc 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            Power Monitoring System
          </Typography>

          <Grid container spacing={3}>
            {/* Current Voltage Display */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Current Voltage
                </Typography>
                <VoltageDisplay>
                  <Typography variant="h2" component="div">
                    {currentVoltage.toFixed(1)}V
                  </Typography>
                  <Typography variant="h4" component="div">
                    {currentAmperage.toFixed(1)}A
                  </Typography>
                </VoltageDisplay>
              </StyledPaper>
            </Grid>

            {/* Power Widget */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <PowerWidget voltage={currentVoltage} current={currentAmperage} />
              </StyledPaper>
            </Grid>

            {/* Voltage History Chart */}
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Voltage History
                </Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                      <XAxis dataKey="time" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(0, 30, 60, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px'
                        }}
                        labelStyle={{ color: '#fff' }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="voltage"
                        stroke="#00ff9f"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="current"
                        stroke="#ff00ff"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </StyledPaper>
            </Grid>

            {/* History Logs */}
            <Grid item xs={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  History Logs
                </Typography>
                <Box sx={{
                  height: 200,
                  overflow: 'auto',
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#00ff9f',
                    borderRadius: '4px',
                  },
                }}>
                  {data.slice().reverse().map((entry, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 1,
                        mb: 1,
                        borderRadius: '5px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {entry.time}
                      </Typography>
                      <Typography variant="body2">
                        Voltage: {entry.voltage.toFixed(1)}V | Current: {entry.current.toFixed(1)}A | Power: {(entry.voltage * entry.current).toFixed(1)}W
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
