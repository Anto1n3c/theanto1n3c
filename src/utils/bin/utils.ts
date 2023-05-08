import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const start = (args?: string[]): string => {
  return `
  ▄▄▄       ███▄    █ ▄▄▄█████▓ ▒█████   ██▓ ███▄    █ ▓█████ 
  ▒████▄     ██ ▀█   █ ▓  ██▒ ▓▒▒██▒  ██▒▓██▒ ██ ▀█   █ ▓█   ▀ 
  ▒██  ▀█▄  ▓██  ▀█ ██▒▒ ▓██░ ▒░▒██░  ██▒▒██▒▓██  ▀█ ██▒▒███   
  ░██▄▄▄▄██ ▓██▒  ▐▌██▒░ ▓██▓ ░ ▒██   ██░░██░▓██▒  ▐▌██▒▒▓█  ▄ 
   ▓█   ▓██▒▒██░   ▓██░  ▒██▒ ░ ░ ████▓▒░░██░▒██░   ▓██░░▒████▒
   ▒▒   ▓▒█░░ ▒░   ▒ ▒   ▒ ░░   ░ ▒░▒░▒░ ░▓  ░ ▒░   ▒ ▒ ░░ ▒░ ░
    ▒   ▒▒ ░░ ░░   ░ ▒░    ░      ░ ▒ ▒░  ▒ ░░ ░░   ░ ▒░ ░ ░  ░
    ░   ▒      ░   ░ ░   ░      ░ ░ ░ ▒   ▒ ░   ░   ░ ░    ░   
        ░  ░         ░              ░ ░   ░           ░    ░  ░
                       Portfolio   v${packageJson.version}

Welcome to Antoine Crone 19.04.5 LTS (GNU/Linux 5.10.16.3-WSL2 x86_64)                        
  
 * Root-me:        https://www.root-me.org/Anto1n3
 * Discord:        Anto1n3c#0261
 * Support:        antoine.crone@icloud.com

  System information as of ${new Date().toString()}

  System name:  Antoine Crone      Processes:             Python/C++/Html/Css/JS
  Usage of /:   18 years           Users logged in:       0
  Memory usage: 0%                 IPv4 address for eth0: 172.22.104.190
  Swap usage:   0%

Type 'help' to see list of available commands.

`;
};
