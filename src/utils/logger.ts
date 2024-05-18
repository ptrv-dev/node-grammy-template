type LogVariant = 'info' | 'success' | 'error' | 'warning';

class Logger {
  public info = (message: string) =>
    console.log(`${this.icon('info')} [${this.now()}] ${message}`);

  public success = (message: string) =>
    console.log(`${this.icon('success')} [${this.now()}] ${message}`);

  public error = (message: string) =>
    console.log(`${this.icon('error')} [${this.now()}] ${message}`);

  public warning = (message: string) =>
    console.log(`${this.icon('warning')} [${this.now()}] ${message}`);

  private now = () => new Date().toLocaleString('ru-RU');
  private icon = (variant: LogVariant) => {
    switch (variant) {
      case 'info':
        return 'ℹ️ ';
      case 'success':
        return '✅';
      case 'error':
        return '💢';
      case 'warning':
        return '⚠️';
    }
  };
}

export const logger = new Logger();
