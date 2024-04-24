import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CompaniesQR = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://cvms-backend-psi.vercel.app/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="companies-container" style={{paddingTop: "2%"}}>
      <Grid container spacing={5}>
        {companies.map((company) => (
          <Grid item key={company._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {company.CNAME}
                </Typography>
                <QRCode value={JSON.stringify(company)} />
                <Typography variant="body2" color="text.secondary">
                  Job: {company.JOBROLE}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salary: {company.SAL}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompaniesQR;
