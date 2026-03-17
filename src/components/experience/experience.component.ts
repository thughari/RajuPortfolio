
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Lead | IT Analyst - Data Engineer',
      company: 'Tata Consultancy Services',
      period: 'Aug 2022 – Present',
      points: [
        'Working as a data engineer, analyzing client data with data scientists to enhance business standards.',
        'Developing client applications using PostgreSQL, SQL Server, and Oracle.',
        'Utilizing AWS Cloud Services like S3 and EC2 for application and database support.',
        'Writing complex SQL queries to build Qlik Dashboards for graphical analysis.',
        'Monitoring production database environments and troubleshooting ongoing issues.',
        'Managing team activities, setting deadlines, and delegating tasks to help team members achieve their goals.'
      ]
    },
    {
      role: 'Senior Associate - Database',
      company: 'N. A. Sportz Interactive Private Limited',
      period: 'Aug 2021 – July 2022',
      points: [
        'Worked on multiple projects for sports management client applications using PostgreSQL and SQL server technologies.',
        'Planned and architected database architectures, implementing them with table structures.',
        'Implemented automated data ingestion algorithms into multiple tables based on industry requirements.'
      ]
    },
    {
      role: 'Database Developer',
      company: 'Sheliza Technologies Private Limited',
      period: 'Sep 2019 – Aug 2021',
      points: [
        'Designed physical table structures to client parameters, integrating business goals to streamline data processing.',
        'Developed database architectural strategies at modeling, design, and implementation stages.',
        'Wrote and maintained technical and functional specifications for databases.',
        'Administered and monitored databases by proactively resolving issues and maintaining servers.',
        'Set up and controlled user profiles and access levels to protect important data.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Bridge IT Solutions',
      period: 'Oct 2016 – Aug 2019',
      points: [
        'Partnered with the development team on product development, application support plans, and prototype programs.',
        'Created procedures for system monitoring, recovery, backup, and optimization.',
        'Developed scripts and processes for data integration and maintenance.',
        'Implemented performance improvement strategies to promote continuous improvement.',
        'Maintained complex T-SQL queries, views, and stored procedures in a multi-database environment.'
      ]
    }
  ];
}
