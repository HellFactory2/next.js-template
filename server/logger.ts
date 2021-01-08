import Chalk from 'chalk';

const env = process.env.NODE_ENV || 'development';

const firstUppercase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const onStartSuccess: () => void = () => {
  const url = `http://localhost:${process.env.SERVER_PORT || '3000'}`;
  console.log('');
  console.log(Chalk.bold('Access URLs:'));
  console.log(Chalk.gray('-------------------------------------'));
  console.log(`${firstUppercase(env)}: ${Chalk.magentaBright(url)}`);
  console.log(Chalk.gray('-------------------------------------'));
  console.log(Chalk.blueBright(`Press ${Chalk.italic('CTRL+C')} to stop`));
  console.log('');
};

export const onStartError = (err: any) => {
  console.log('');
  console.log(Chalk.bold('Failed to start the server:'));
  console.log(Chalk.gray('-------------------------------------'));
  console.log(err);
  console.log(Chalk.gray('-------------------------------------'));
  console.log('');
};
