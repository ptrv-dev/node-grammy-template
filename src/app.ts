import { Bot } from 'grammy';
import { config, logger } from '@/utils';

const BOT_TOKEN = config.get('BOT_TOKEN');

const bot = new Bot(BOT_TOKEN);

bot.start({
  onStart: ({ username }) => {
    logger.success(`Telegram Bot @${username} successfully started.`);
  },
});
