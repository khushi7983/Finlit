import {
    Award,
    BookOpen,
    ChevronRight,
    DollarSign,
    Download,
    Play,
    Star,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';

export const iconMapper = {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  DollarSign,
  Target,
  Star,
  Play,
  Download,
  ChevronRight
};

export const getIconComponent = (iconName) => {
  return iconMapper[iconName] || Users; // Default to Users if icon not found
};
