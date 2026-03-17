
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server (T-SQL)' }, { name: 'PostgreSQL (PGSQL)' }, { name: 'Oracle (PL/SQL)' },
        { name: 'MySQL (SQL)' }, { name: 'MongoDB (NoSQL)' }
      ]
    },
    {
      title: 'ETL & Data Tools',
      skills: [
        { name: 'ETL Tools (SSMS)' }, { name: 'SSIS' }, { name: 'SSRS' },
        { name: 'Data Migration' }, { name: 'Data Modeling' }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS (S3, EC2)' }
      ]
    },
    {
      title: 'Programming & Web',
      skills: [
        { name: 'Python' }, { name: 'Django' }, { name: 'JavaScript' },
        { name: 'HTML' }, { name: 'CSS' }
      ]
    },
     {
      title: 'Other Skills',
      skills: [
        { name: 'Database Architecture' }, { name: 'Disaster Recovery' }, { name: 'Performance Tuning' },
        { name: 'Microsoft Excel' }
      ]
    }
  ];
}
