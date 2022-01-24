import { notification } from 'antd';

type notificationType = 'success' | 'info' | 'warning' | 'error';
export const showNotification = ({ message, description = '', type = 'info' }: { message: string; description?: string; type: notificationType }) => {
	const openNotificationWithIcon = (notiType: notificationType) => {
		notification[notiType]({
			message,
			description,
		});
	};

	openNotificationWithIcon(type);
};

export const numb = (x: any) => {
	const rev = x || 0
	return rev.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const phoneFomatter = (num) => {
  let formatNum = '';
  if (num.length == 11) {
    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else {
    formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  return formatNum;
};


export default showNotification;
