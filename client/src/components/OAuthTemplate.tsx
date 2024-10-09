import React from 'react';

interface OAuthTemplateProps {
  token: any;
}

const OAuthTemplate: React.FC<OAuthTemplateProps> = ({ token }) => {
  return (
    <div>
      <h2>OAuth Info</h2>
      <table>
        <tbody>
          <tr>
            <td>Access token</td>
            <td>{token.access_token}</td>
          </tr>
          <tr>
            <td>Refresh token</td>
            <td>{token.refresh_token}</td>
          </tr>
          <tr>
            <td>Expiration at</td>
            <td>{token.expires}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OAuthTemplate;
