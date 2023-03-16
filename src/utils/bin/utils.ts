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


export const banner = (args?: string[]): string => {
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

${new Date().toString()}
                     
Type 'help' to see list of available commands.

`;
};
