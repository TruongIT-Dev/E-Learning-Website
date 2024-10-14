import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Icon mũi tên trái
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // Icon mũi tên phải

const Sidebar = () => {
  const [open, setOpen] = useState(false); // Trạng thái mở/đóng của Sidebar

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {!open && ( // Ẩn nút bấm khi Sidebar đang mở
        <IconButton 
          onClick={toggleDrawer(true)} 
          sx={{ 
            position: 'fixed', 
            top: '50%',    // Đặt nút ở giữa chiều dọc
            left: 0,       // Nằm bên trái màn hình
            transform: 'translateY(-50%)', // Dịch chuyển để căn giữa
            zIndex: 1300,  // Đảm bảo nút nằm trên các thành phần khác
          }}
        >
          <ChevronRightIcon /> {/* Mũi tên chỉ phải khi Sidebar đang đóng */}
        </IconButton>
      )}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;
