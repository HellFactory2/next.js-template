import chalk from 'chalk';
import { env, port } from './load-env';

const firstUppercase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const onStartHandler = (err: Error) => {
  if (err) {
    fatalErrorHandler(err);
  }
  const url = `http://localhost:${port}`;
  console.log('');
  console.log(chalk.bold('Access URLs:'));
  console.log(chalk.gray('-------------------------------------'));
  console.log(`${firstUppercase(env)}: ${chalk.magentaBright(url)}`);
  console.log(chalk.gray('-------------------------------------'));
  console.log(chalk.blueBright(`Press ${chalk.italic('CTRL+C')} to stop`));
  console.log('');
};

export const fatalErrorHandler = (err: any) => {
  console.log('');
  console.log(chalk.bold(chalk.red('Fatal error:')));
  console.log(chalk.gray('-------------------------------------'));
  console.log(err.message || err);
  console.log(chalk.gray('-------------------------------------'));
  console.log('');
  process.exit(1);
};
