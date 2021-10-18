export const template = ({name}) => {
    return (`
<center style="width:100%;background-color:#f5f6fa">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
        <tbody><tr>
            <td style="padding:30px 0">
                <table style="width:100%;max-width:620px;margin:0 auto">
        <tbody>
        <tr>
            
        </tr>
        </tbody>
    </table>
                    <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff">
        <tbody>
        <tr>
            <td style="padding:30px 30px 20px">
                Welcome ${name}!
            </td>
        </tr>
        <tr>
            <td style="padding:0 30px 20px">
                <p>Thank you for registering on our platform. You're almost ready to start.</p>
<p>Simply click the button below to confirm your email address and active your account.</p>

            </td>
        </tr>
        <tr>
            <td style="padding:0 30px 20px">
                <p style="margin-bottom:25px">This link will expire in 30 minutes and can only be used once.</p>
                <a href="https://fxnetwork.space/auth/login" style="background-color:#6576ff;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform:uppercase;padding:0 30px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://itrade-apex.com/verify?token%3D28a0ce04337a949901104a76ef225633ceaf8ae7482881364e03ef112f265bad594e53a7&amp;source=gmail&amp;ust=1634594548063000&amp;usg=AFQjCNFmL5zo32oPkKs8aDqWtPvGrIvJ_w">Verify Email</a>
            </td>
        </tr>

                    <tr>
                <td style="padding:20px 30px 30px">
                    <p>Best Regard,<br>
Team of Fx Network</p>

                </td>
            </tr>
                </tbody>
    </table>
                <table style="width:100%;max-width:620px;margin:0 auto">
    <tbody>
    <tr>
        <td style="text-align:center;padding:25px 20px 0">
            <p style="font-size:13px">Fx Network © 2021.</p>
                    </td>
    </tr>
    </tbody>
</table>
            </td>
        </tr>
    </tbody></table>
</center>`)
}
