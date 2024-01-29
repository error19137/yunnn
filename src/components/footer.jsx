import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandLine, IconBrandGithub, IconBrandDiscord, IconMail, IconPhone } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer>
            <div>My information</div>
            <div id="footer-content">
                {/* 社交帳號 */}
                <div id="footer-social">
                    <a id="facebook" href="https://www.facebook.com/profile.php?id=100004653729307"><IconBrandFacebook /></a>
                    <a id="instagram" href="https://instagram.com/yun.chen_0217?igshid=ZDdkNTZiNTM="><IconBrandInstagram /></a>
                    <a id="Youtube" href="https://www.youtube.com/channel/UCP7gs2_4yeb3T0Bwwb4GrkA"><IconBrandYoutube /></a>
                    <a id="Line" href="https://line.me/ti/p/8GkgrpZm-w"><IconBrandLine /></a>
                    <a id="Github" href="https://github.com/error19137"><IconBrandGithub /></a>
                    <a id="Discord" href="https://discordapp.com/users/893415357283455008"><IconBrandDiscord /></a>
                </div>
                {/* 聯絡資訊 */}
                <div id="footer-contact">
                    <a href="mailto:thomas.cheng0217@gmail.com">
                        <IconMail />
                    </a>
                    <a href="tel:+886912153722">
                        <IconPhone />
                    </a>
                </div>
            </div>
            <div id='footer-cc'>版權所有© 2024/01~2024 Yun's Website React版</div>
        </footer>
    );
}

export default Footer;