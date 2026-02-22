import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Project, ContactInfo } from '../backend';

export function useMarketingProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<Project[]>({
    queryKey: ['marketing-projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMarketingProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSocialMediaProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<Project[]>({
    queryKey: ['social-media-projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSocialMediaProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useWebDevProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<Project[]>({
    queryKey: ['web-dev-projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWebDevProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo | null>({
    queryKey: ['contact-info'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getContactInfo();
      } catch (error) {
        // Contact info not set yet
        return null;
      }
    },
    enabled: !!actor && !isFetching,
  });
}
