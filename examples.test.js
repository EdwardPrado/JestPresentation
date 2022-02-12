test("toEqual", () => {
	expect(1).toEqual(1);
});

// test("toBe", () => {
// 	expect(1).toBe(1);
// });

// Failed toBe code example
// test("toBe", () => {
// 	expect(1).toBe("1");
// });

test("Truthiness", () => {
	const assignments = {
		isQuizDue: null,
		isLab4Due: true,
		isHybrid2Due: false,
	};

	expect(assignments.isQuizDue).toBeNull();
	// expect(assignments.isLab4Due).toBeTruthy();
	// expect(assignments.isLab4Due).not.toBeTruthy();
	// expect(assignments.isHybrid2Due).toBeFalsy();

	//Failed truthiness code example
	// expect(assignments.isTestDue).toBeDefined();
	// expect(assignments.isQuizDue).not.toBeUndefined();
});

test("Strings", () => {
	expect("admissions@algonquincollege.com").toMatch(/algonquin/);

	//Failed string code example
	// expect("admissions@carleton.ca").toMatch(/algonquin/);
});

test("Numbers", () => {
	const gradYear = 2022;
	const currentYear = new Date().getFullYear();

	// expect(gradYear).toBeGreaterThan(2020);
	expect(gradYear).toBeLessThan(currentYear + 1);

	//Failed number code example
	// expect(gradYear).toBeLessThan(2019);
});

test("Arrays and Iterables", () => {
	const classList = ["Web Security", "Web Programming Languages II", "Current Trends in Web App. Dev."];

	expect(classList).toContain("Web Security");

	//Failed arrays and iterables example
	//expect(classList).toContain("Advanced Databases");
});

// function attachWords(firstWord, secondWord) {
// 	return `${firstWord} ${secondWord}`;
// }

function forEach(items, callback) {
	for (let index = 0; index < items.length; index++) {
		callback(items[index]);
	}
}

//This example comes directly from the Jest documentation
test("Mock Functions", () => {
	const mockCallback = jest.fn((x) => 42 + x);
	forEach([0, 1], mockCallback);

	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe(1);

	// The return value of the first call to the function was 42
	expect(mockCallback.mock.results[0].value).toBe(42);
});
