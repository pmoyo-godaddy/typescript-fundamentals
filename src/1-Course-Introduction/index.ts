/**
 * Welcome to TypeScript Fundamentals!
 *
 * This course will teach you the fundamentals of TypeScript,
 * a strongly typed programming language that builds on JavaScript.
 *
 * TypeScript adds optional static types to JavaScript, which can help
 * you catch errors early and make your code more maintainable.
 */

// Basic Types in TypeScript
// TypeScript provides several basic types including string, number, and boolean

let courseName: string = 'TypeScript Fundamentals';
let moduleCount: number = 7;
let isCompleted: boolean = false;

console.log(`Welcome to ${courseName}!`);
console.log(`This course has ${moduleCount} modules.`);
console.log(`Course completed: ${isCompleted}`);

// Type Inference
// TypeScript can automatically infer types based on the value assigned
let inferredString = 'TypeScript'; // Type is inferred as string
let inferredNumber = 2024; // Type is inferred as number

// Arrays
// This course has 7 modules (1-7), listed in the topics array
let topics: string[] = [
  'Course Introduction',
  'Getting Started with TypeScript',
  'Using Variables, Types, and Enums',
  'Creating and Using Functions',
  'Creating and Using Interfaces',
  'Creating and Using Classes',
  'Creating and Using Generics',
];

console.log(`\nCourse Topics:`);
// Display each topic with its module number (1-7)
topics.forEach((topic, index) => {
  console.log(`  Module ${index + 1}: ${topic}`);
});

// Simple Function with Type Annotations
function greetStudent(name: string): string {
  return `Hello, ${name}! Ready to learn TypeScript?`;
}

const greeting = greetStudent('Learner');
console.log(`\n${greeting}`);

// Object with Type Annotation
interface Course {
  name: string;
  modules: number;
  level: string;
  topics: string[];
}

const typescriptCourse: Course = {
  name: courseName,
  modules: moduleCount,
  level: 'Fundamentals',
  topics: topics,
};

console.log('\nCourse Information:');
console.log(`Name: ${typescriptCourse.name}`);
console.log(`Level: ${typescriptCourse.level}`);
console.log(`Total Modules: ${typescriptCourse.modules}`);

// The Power of TypeScript
// TypeScript helps catch errors at compile-time rather than runtime
// Uncomment the following line to see TypeScript's type checking in action:
// let errorExample: number = "This will cause an error"; // Error: Type 'string' is not assignable to type 'number'

console.log(
  '\n✅ Module 1 Complete! Proceed to the next modules to learn more.',
);
