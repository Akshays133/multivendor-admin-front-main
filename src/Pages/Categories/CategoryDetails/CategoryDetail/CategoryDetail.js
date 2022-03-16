import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const CategoryDetail = ({categories}) => {
     console.log(categories)
     return (
          <>  
               <Grid
                    sx={{
                         height: "auto",
                         mb:2
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    >
                    <Paper sx={{ py: 2, textAlign: 'center',backgroundColor:"#FFFFE0", }} elevation={4}>
                    <img src={categories.imgUrl} alt="" style={{width:"100%"}} />
                         <Typography
                              sx={{ fontWeight:500,mt:2,color:"#6B8E23" }}
                              variant="h6"
                              gutterBottom
                              component="div"
                         >
                              Title: {categories.name}
                         </Typography>
                         
                    </Paper>
               </Grid>    
          </>
     );
};

export default CategoryDetail;