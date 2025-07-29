const url = 'https://purplescholl.ru/course/javaskript';
const url1 = 'https://purpleschollru/course/javaskript';

function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		if (!host.includes('.')) {
			return;
		}
		console.log(protocol, _, host, ...path);
		console.log(`Protocol: ${protocol.split(':')[0]}`);
		console.log(`Host: ${host}`);
		console.log(`Path inside site: /${path.join('/')}`);
	}
}

getUrlParts(url1);