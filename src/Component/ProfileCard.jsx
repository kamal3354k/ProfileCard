import React from 'react'
import {Card,CardContent,Grid,Typography,Stack,Box,Button,Avatar,Tooltip} from '@mui/material';
import {Create,CloudUpload} from '@mui/icons-material';
const itemStyle={
fontSize:"13px",
fontWeight: 600,
color: "#b0aaaa",
fontFamily: "monospace"
}
const itemStyleTwo={
fontSize:"13px",
fontWeight: 600,
color: "#836fa7",
fontFamily: "monospace"
}

export default function ProfileCard() {
return (
<>
  <Card sx={{width:"500px"}}>
    <CardContent>
      <Grid container>
        <Grid item lg={5}>
          <Stack alignItems="center" p={2} rowGap={2}>
            <Box className='profileBox' sx={{borderRadius:"50%",width: "90%",height:"155px"}}>              
                <Avatar  sx={{width:"100%",height:"100%"}} alt="profile_pic" src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600" />
                <Tooltip title="Update">
                <Box sx={{"& .MuiSvgIcon-root":{fontSize:"18px"}}} className='updateIcon'><CloudUpload/></Box>
                </Tooltip>
            </Box>
            <Box sx={{width:"100%",p:"0 20px"}}>
            <p className="ratingBar">
              <span className="rate rate-color"></span>
              <span className="rate rate-color"></span>
              <span className="rate rate-color"></span>
              <span className="rate rate-color"></span>
              <span className="rate rate-color"></span>
              <span className="rate rate-color"></span>
              <span className="rate"></span>
              <span className="rate"></span>
              <span className="rate"></span>
              <span className="rate"></span>
              <span className="rate"></span>
            </p>
            </Box>

          </Stack>
            <Stack  flexDirection="row" justifyContent="space-around">
              <Box>
                <Typography sx={itemStyle}>Your Rating</Typography>
                <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:600,color:"#5e5e4e"}}>60%</Typography>
              </Box>
              <Box>
                <Typography sx={itemStyle}>Activity</Typography>
                <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:600,color:"#5e5e4e"}}>91%</Typography>
              </Box>
            </Stack>
        </Grid>
        <Grid item lg={7}>
          <Stack justifyContent="space-between"
            sx={{boxSizing:"border-box",p:"20px",pl:"0",height:"auto",boxShadow:"2px 5px 6px #d3d3d354"}} flex
            flexDirection="row" columnGap="10px">
            <Box>
              <Typography sx={{fontSize: "20px",fontWeight: 600, fontFamily: "monospace", letterSpacing: "-0.5px"}}>
                Kamal Rathore
              </Typography>
              <Typography sx={{fontSize:"12px",fontWeight: 600,color: "#b0aaaa", fontFamily: "monospace"}}>
                New Delhi, India
              </Typography>
            </Box>

            <Button startIcon={<Create
              sx={{margin: "-4px 0px",padding: "5px",borderRadius: "50%",background: "#00667a"}} />}
            sx={{padding:"14px 12px",height:"30px",backgroundColor:"#0093b0",color:"#fff",fontSize:"12px",letterSpacing:"1px","&:hover":{background:"#0d7b91"}}}>Edit</Button>
          </Stack>

          <Stack>
            <Grid container sx={{p:"20px 5px 30px"}} rowGap={1}>
              <Grid Items sx={itemStyle} md={3} xs={12}>Email</Grid>
              <Grid Items sx={itemStyleTwo} md={9} xs={12}>kamal3354k@gmail.com</Grid>
              <Grid Items sx={itemStyle} md={3} xs={12}>City</Grid>
              <Grid Items sx={itemStyleTwo} md={9} xs={12}>New Delhi</Grid>
              <Grid Items sx={itemStyle} md={3} xs={12}>State</Grid>
              <Grid Items sx={itemStyleTwo} md={9} xs={12}>Delhi</Grid>
              <Grid Items sx={itemStyle} md={3} xs={12}>Country</Grid>
              <Grid Items sx={itemStyleTwo} md={9} xs={12}>India</Grid>
              <Grid Items sx={itemStyle} md={3} xs={12}>Phone</Grid>
              <Grid Items sx={itemStyleTwo} md={9} xs={12}>(+91-9319853354)</Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</>
)
}