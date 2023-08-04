import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
   
  const DefaultSidebar = () => {
    return (
        <div className="sticky top-0">
      <Card className="absolute right-0 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-red-200">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            BRRDI
          </Typography>
        </div>
        <List>
          <ListItem>
            
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-10 w-10" />
            </ListItemPrefix>
            Dashboard
            
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-10 w-10" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem className="text-lg">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-10 w-10" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-10 w-10" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      </div>
    );
  }

  export default DefaultSidebar;