async function getResult(title: string) {
	return import(`../content/methods/_${title}.ts`);
}

export default getResult;
