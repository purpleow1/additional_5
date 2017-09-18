module.exports = function check(str, bracketsConfig) {
	var stack = [];
	var sameBracketsOpen = [];
	for (var j = 0; j < bracketsConfig.length; j++) {
		sameBracketsOpen[i] = false;
	}

	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < bracketsConfig.length; j++) {
			//same brakets case
			if ((str[i] == bracketsConfig[j][0])&&(str[i] == bracketsConfig[j][1])) {
					if (!sameBracketsOpen[j]) {
						stack.push(str[i]);
						sameBracketsOpen[j] = true;
						break;
					}
					else if (stack.pop() == str[i]) {
						sameBracketsOpen[j] = false;
						break;
					}
					else return false;
				}
			//open brakets case
			else if (str[i] == bracketsConfig[j][0]) {
				stack.push(str[i]);
				break;
			}
			//close brakets case
			else if (str[i] == bracketsConfig[j][1]) {
				if (stack.pop() == bracketsConfig[j][0]) break;
				else return false;
			}
		}
	}
	if (stack.length) return false;
	else return true;
}
