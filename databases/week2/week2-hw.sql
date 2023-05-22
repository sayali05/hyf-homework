-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
    u.name, u.email, t.title
FROM
    user_task ut
        INNER JOIN
    task t ON t.id = ut.task_id
        INNER JOIN
    user u ON u.id = ut.user_id
WHERE
    u.email LIKE '%@spotify.com%';
 
 
 -- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
    u.name, t.title, s.name AS status_name
FROM
    user_task ut
        INNER JOIN
    task t ON t.id = ut.task_id
        INNER JOIN
    user u ON u.id = ut.user_id
        INNER JOIN
    status s ON s.id = t.status_id
WHERE
    u.name LIKE '%Donald Duck%'
        AND s.name = 'Not started';
        
-- Get all the tasks for 'Maryrose Meadows' that were created in september        
SELECT 
    u.name, t.title, t.created
FROM
    user_task ut
        INNER JOIN
    task t ON t.id = ut.task_id
        INNER JOIN
    user u ON u.id = ut.user_id
WHERE
    u.name = 'Maryrose Meadows'
        AND MONTH(t.created) = '09';
        
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.        

SELECT 
    COUNT(id) AS Total_task, MONTH(created) AS Month, MONTHNAME(created) AS Month_name
FROM
    task
GROUP BY MONTH(created) , MONTHNAME(created);
       