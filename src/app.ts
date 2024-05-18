import { Bot } from 'grammy';
import { config, logger } from '@/utils';
import { randomBytes } from 'crypto';

const BOT_TOKEN = config.get('BOT_TOKEN');

const bot = new Bot(BOT_TOKEN);

bot.start({
  onStart: ({ username }) => {
    logger.success(`Telegram Bot @${username} successfully started.`);
  },
});

bot.catch(({ ctx, name, message, stack }) => {
  const code = randomBytes(4).toString('hex');
  logger.error(
    `Telegram Bot unhandled error! #${code}\n${name}\n${message}\n${stack}`
  );
  ctx.reply(
    `<b>💢 Непредвиденная ошибка! 💢</b>\n\nВозникла непредвиденная ошибка при работе бота. Пожалуйста попробуйте воспользоваться ботом ещё раз. Если ошибка повторяется обратитесь к тех. поддержке.\n\nКод ошибки: <code>${code}</code>`
  );
});
