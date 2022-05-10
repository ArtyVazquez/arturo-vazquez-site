import { Box, OutlinedInput, Button } from '@mui/material';
import { useState } from "react";

export default function EmailForm() {
    const [msg, setMsg]= useState(null);
   return (
       <Box sx={{ borderRadius: '1rem',
                  textAlign: 'center',
                  mb: 5 }}>
           <form action="https://formsubmit.co/avazquez1699@gmail.com" method="POST">
               <Box sx={{m: 4}}>
                   <OutlinedInput required
                                  placeholder="Name: "
                                  name="name"
                                  sx={{
                                    bgcolor: 'background.default',
                                    color: 'text.primary'
                                  }}/>
               </Box>
               <Box sx={{m: 4}}>
                   <OutlinedInput required
                                  type="email"
                                  name="email"
                                  placeholder="Email: "
                                  sx={{
                                    bgcolor: 'background.default',
                                    color: 'text.primary'
                                  }}/>
               </Box>
                <Box sx={{m: 4}}>
                    <OutlinedInput required
                                   name="message"
                                   placeholder="Message: "
                                   multiline={true}
                                   rows='10'
                                   sx={{ display: 'flex',
                                        minWidth: 200,
                                        bgcolor: 'background.default',
                                        color: 'text.primary' }}/>
                </Box>
               <Button variant="contained"
                       color="secondary"
                       type="submit"
                       value={msg}
                       onChange={(e) => setMsg(e.currentTarget.value)}>
                Send
               </Button>
           </form>
       </Box>
   )
}