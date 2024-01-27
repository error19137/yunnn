import { IconBrandFacebook, IconBrandInstagram,IconBrandYoutube ,IconBrandLine, IconBrandGithub, IconBrandDiscord } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer>
        <h1>My information</h1>
           
        <div id="foo1"> 
        <IconBrandFacebook />
        <IconBrandInstagram />
        <IconBrandYoutube />
        <IconBrandLine />
        <IconBrandGithub />
        <IconBrandDiscord />
        </div>
        <div id="foo2">
        <h2>版權所有© 2024/01~2024 Yun的網站 React版</h2>
        </div>
        </footer>
    );
}

export default Footer;