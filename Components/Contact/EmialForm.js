import { Box, useFormControl, OutlinedInput, Button, TextareaAutosize} from '@mui/material';
import { useState } from "react";

export default function EmailForm() {
    const [msg, setMsg]= useState(null);
   return (
       <Box sx={{
           borderRadius: '1rem',
           p: 5,
           m: 5,
           textAlign: 'center'
       }}>
           <form action="https://formsubmit.co/avazquez1699@gmail.com" method="POST">
               <Box sx={{m: 4}}>
                   <OutlinedInput required
                                  placeholder="Name: "
                                  name="name"/>
               </Box>
               <Box sx={{m: 4}}>
                   <OutlinedInput required
                                  type="email"
                                  name="email"
                                  placeholder="Email: "/>
               </Box>
                <Box sx={{m: 4}}>
                    <OutlinedInput required
                                   name="message"
                                   placeholder="Message: "
                                   multiline={true}
                                   rows='10'
                                   sx={{display: 'flex'}}/>
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