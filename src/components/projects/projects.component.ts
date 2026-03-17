
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise Data Warehouse Platform',
      description: 'Architected and deployed a centralized DWH to consolidate data from over 20 disparate sources, enabling unified business intelligence and reporting across the enterprise.',
      technologies: ['SQL Server', 'SSIS', 'SSRS', 'Data Modeling', 'ETL'],
      impact: 'Reduced report generation time by 75% and provided a single source of truth, improving decision-making accuracy.',
      architecture: 'Traditional Kimball star-schema architecture with staging, integration, and access layers.'
    },
    {
      title: 'Cloud Data Pipeline using GCP and BigQuery',
      description: 'Designed and implemented a serverless, scalable data pipeline on Google Cloud Platform to ingest, process, and analyze streaming and batch data from IoT devices.',
      technologies: ['GCP', 'BigQuery', 'Cloud Functions', 'Pub/Sub', 'Python'],
      impact: 'Enabled real-time analytics on device data, leading to a 30% improvement in operational efficiency and predictive maintenance.',
      architecture: 'Event-driven architecture using Pub/Sub for ingestion, Cloud Functions for transformation, and BigQuery for analytics.'
    },
    {
      title: 'Real-time Analytics Platform using Databricks',
      description: 'Built a high-performance analytics platform for a financial services client to process and analyze real-time market data, supporting algorithmic trading strategies.',
      technologies: ['Databricks', 'Spark Streaming', 'Delta Lake', 'Python', 'AWS'],
      impact: 'Achieved sub-second query latency on massive datasets, providing traders with a critical competitive advantage.',
      architecture: 'Unified data analytics platform with a medallion architecture (Bronze, Silver, Gold layers) on Delta Lake.'
    },
    {
      title: 'Database Migration Platform',
      description: 'Led the migration of 50+ mission-critical Oracle databases to PostgreSQL with minimal downtime, developing a repeatable framework for future migrations.',
      technologies: ['PostgreSQL', 'Oracle', 'AWS DMS', 'Python Scripts', 'Data Validation'],
      impact: 'Reduced database licensing costs by over $2 million annually and improved system performance and scalability.',
      architecture: 'Phased migration approach including schema conversion, data replication, and rigorous validation checks.'
    }
  ];
}
