export default 'yes expose global';
function abc() {
	console.log('yes, abc as outputDefault');
}
export function ddd (name) {
	console.log(name);
	return name;
}
export {abc as outputDefault};