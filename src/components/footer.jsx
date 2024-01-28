import { IconBrandFacebook, IconBrandInstagram,IconBrandYoutube ,IconBrandLine, IconBrandGithub, IconBrandDiscord } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer>
        <h1>My information</h1>
           
        <div id="foo1"> 
        <a id="facebook" href="https://www.facebook.com/profile.php?id=100004653729307"><IconBrandFacebook /></a>
        <a id="instagram" href="https://instagram.com/yun.chen_0217?igshid=ZDdkNTZiNTM="><IconBrandInstagram /></a>
        <a id="Youtube" href="https://www.youtube.com/channel/UCP7gs2_4yeb3T0Bwwb4GrkA"><IconBrandYoutube /></a>
        <a id="Line" href="https://line.me/ti/p/8GkgrpZm-w"><IconBrandLine /></a>
        <a id="Github" href="https://github.com/error19137"><IconBrandGithub /></a>
        <a id="Discord" href="https://discordapp.com/users/893415357283455008"><IconBrandDiscord /></a>
        </div>
        <div id="foo2">
        <h2>版權所有© 2024/01~2024 Yun's Website React版</h2>
        </div>
        </footer>
    );
}

export default Footer;