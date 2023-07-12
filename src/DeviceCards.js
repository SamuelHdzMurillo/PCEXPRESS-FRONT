import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';


export default function DeviceCards() {
  const [devices, setDevices] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/devices')
      .then(response => response.json())
      .then(data => setDevices(data))
      .catch(error => console.error(error));
  }, []);

  const currentDate = new Date().toLocaleDateString();

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const filteredDevices = devices.filter(device =>
    device.brand.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentDate}
          </Typography>
          <Button color="inherit">Iniciar Sesión</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <TextField
          label="Buscar"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={handleSearch}
        />
      </Box>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {filteredDevices.map(device => (
          <Card
            key={device.id}
            sx={{
              maxWidth: 345,
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              margin: '10px',
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={device.imageUrl}
              alt={device.brand}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {device.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {device.damage}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <Button variant="contained" size="small">
                Detalle
              </Button>
              <Typography variant="body2" color="text.secondary">
                Estado: {device.state}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </div>
  );
}
