import Task from './Task'

export default
	{
		component: Task,
		title: 'Task',
	}

//👇 We create a “template” of how args map to rendering
const Template = args => <Task {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args =
{
	task:
	{
		id: '1',
		title: 'Test Task',
		state: 'TASK_INBOX',
		updateAt: new Date(2021, 0, 1, 9, 0),
	},
};

export const Pinned = Template.bind({});

Pinned.args = {
	task:
	{
		...Default.args.task,
		state: 'TASK_PINNED',
	}
}


export const Archived = Template.bind({});
Archived.args = 
{
	task: 
	{
		...Default.args.task,
		state: 'TASK_ARCHIVED'
	}
}