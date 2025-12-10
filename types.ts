import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface ExpenseData {
  name: string;
  value: number;
  color: string;
  desc: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

export interface ComparisonItem {
  title: string;
  items: string[];
  isPositive: boolean;
}