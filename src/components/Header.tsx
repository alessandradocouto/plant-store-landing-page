import { Link } from 'react-router-dom';
import headerImg from '../assets/pexels-sohail-nachiti-807598.jpg';
import { 
    Button,
    Typography,
    Toolbar,
    Stack,
} from "@mui/material"


function Header () {
    
    return (
        <Stack 
            component="section" 
            direction="column" 
            spacing={3}
            sx={{
                alignItems: { sm: 'flex-start' },
                backgroundImage: `url(${headerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "25% 40%",
                backgroundRepeat: 'no-repeat',
                maxWidth: 'auto',
                width: '100%',
                height: 'auto',
                minHeight: '100vh',
                px: 6,
                py: 4,
            }}
        >
            <Toolbar/>
                <Typography variant='h2' component='h2'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                    wordWrap: "break-word",
                }}>
                    Discover the plant ideal to your lifestyle
                </Typography>

                <Typography 
                    variant='h6' 
                    component='h3'
                    sx={{
                        fontWeight: 400,
                        letterSpacing: 1.1,
                        color: '#fff',
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur<br/>
                    similique unde fugit veniam eius, corporis<br/>
                    qui ducimus quibusdam.
                </Typography>
                
                <Button 
                    component={Link}
                    to='/store'
                    variant="contained"
                    size='large'
                    type="submit"
                    sx={{
                        marginBottom: { xs: 4 },
                        fontWeight: 400,
                        color: '#fff',
                        backgroundColor: '#27a556',
                        '&:hover':{
                            backgroundColor: '#27a556',
                        }
                    }}
                >
                    buy now
                </Button>  
        </Stack>
    )
}

export default Header