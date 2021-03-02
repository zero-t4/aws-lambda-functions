const { execSync } = require('child_process')

// NOTE [NZ] 03.03.2021: https://github.com/settings/tokens
//  Insert personal access token here
const TOKEN = ''

const USER_NAME = 'user';
const PROJECT_NAME = 'project';
const USER_EMAIL = 'user@gmail.com';

const COMMAND = 'task';

exports.handler = async(event, context, callback) => {
  execSync('rm -rf /tmp/*', { encoding: 'utf8', stdio: 'inherit' })

  execSync(`git clone https://${TOKEN}@github.com/${USER_NAME}/${PROJECT_NAME}.git /tmp/project`, { encoding: 'utf8', stdio: 'inherit' })

  execSync(`cd /tmp/project && git config user.email "${USER_EMAIL}" && git config user.name "${USER_NAME}" && npm run ${COMMAND} && git add * && git commit -m "${(new Date()).toISOString()} update" && git push`, { encoding: 'utf8' })
}
